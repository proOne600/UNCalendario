(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/validate"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.defaults }}
  {{# def.coerce }}
  
  {{ /**
      * schema compilation (render) time:
      * it = { schema, RULES, _validate, opts }
      * it.validate - this template function,
      *   it is used recursively to generate code for subschemas
      *
      * runtime:
      * "validate" is a variable name to which this function will be assigned
      * validateRef etc. are defined in the parent scope in index.js
      */ }}
  
  {{ var $async = it.schema.$async === true; }}
  
  {{? it.isTop}}
    {{
      var $top = it.isTop
        , $lvl = it.level = 0
        , $dataLvl = it.dataLevel = 0
        , $data = 'data';
      it.rootId = it.resolve.fullPath(it.root.schema.id);
      it.baseId = it.baseId || it.rootId;
      if ($async) {
        it.async = true;
        var $es7 = it.opts.async == 'es7';
        it.yieldAwait = $es7 ? 'await' : 'yield';
      }
      delete it.isTop;
  
      it.dataPathArr = [undefined];
    }}
  
    var validate =
    {{? $async }}
      {{? $es7 }}
        (async function
      {{??}}
        {{? it.opts.async == 'co*'}}co.wrap{{?}}(function*
      {{?}}
    {{??}}
      (function
    {{?}}
      (data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null; {{ /* don't edit, used in replace */ }}
      var errors = 0;     {{ /* don't edit, used in replace */ }}
      if (rootData === undefined) rootData = data;
  {{??}}
    {{
      var $lvl = it.level
        , $dataLvl = it.dataLevel
        , $data = 'data' + ($dataLvl || '');
  
      if (it.schema.id) it.baseId = it.resolve.url(it.baseId, it.schema.id);
  
      if ($async && !it.async) throw new Error('async schema in sync schema');
    }}
  
    var errs_{{=$lvl}} = errors;
  {{?}}
  
  {{
    var $valid = 'valid' + $lvl
      , $breakOnError = !it.opts.allErrors
      , $closingBraces1 = ''
      , $closingBraces2 = '';
  
    var $errorKeyword;
    var $typeSchema = it.schema.type
      , $typeIsArray = Array.isArray($typeSchema);
  }}
  
  {{## def.checkType:
    {{
      var $schemaPath = it.schemaPath + '.type'
        , $errSchemaPath = it.errSchemaPath + '/type'
        , $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
    }}
  
    if ({{= it.util[$method]($typeSchema, $data, true) }}) {
  #}}
  
  {{? $typeSchema && it.opts.coerceTypes }}
    {{ var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema); }}
    {{? $coerceToTypes }}
      {{# def.checkType }}
        {{# def.coerceType }}
      }
    {{?}}
  {{?}}
  
  {{ var $refKeywords; }}
  {{? it.schema.$ref && ($refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref')) }}
    {{? it.opts.extendRefs == 'fail' }}
      {{ throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '"'); }}
    {{?? it.opts.extendRefs == 'ignore' }}
      {{
        $refKeywords = false;
        console.log('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
      }}
    {{?? it.opts.extendRefs !== true }}
      {{ console.log('$ref: all keywords used in schema at path "' + it.errSchemaPath + '". It will change in the next major version, see issue #260. Use option { extendRefs: true } to keep current behaviour'); }}
    {{?}}
  {{?}}
  
  {{? it.schema.$ref && !$refKeywords }}
    {{= it.RULES.all.$ref.code(it, '$ref') }}
    {{? $breakOnError }}
      }
      if (errors === {{?$top}}0{{??}}errs_{{=$lvl}}{{?}}) {
      {{ $closingBraces2 += '}'; }}
    {{?}}
  {{??}}
    {{~ it.RULES:$rulesGroup }}
      {{? $shouldUseGroup($rulesGroup) }}
        {{? $rulesGroup.type }}
          if ({{= it.util.checkDataType($rulesGroup.type, $data) }}) {
        {{?}}
          {{? it.opts.useDefaults && !it.compositeRule }}
            {{? $rulesGroup.type == 'object' && it.schema.properties }}
              {{# def.defaultProperties }}
            {{?? $rulesGroup.type == 'array' && Array.isArray(it.schema.items) }}
              {{# def.defaultItems }}
            {{?}}
          {{?}}
          {{~ $rulesGroup.rules:$rule }}
            {{? $shouldUseRule($rule) }}
              {{= $rule.code(it, $rule.keyword) }}
              {{? $breakOnError }}
                {{ $closingBraces1 += '}'; }}
              {{?}}
            {{?}}
          {{~}}
          {{? $breakOnError }}
            {{= $closingBraces1 }}
            {{ $closingBraces1 = ''; }}
          {{?}}
        {{? $rulesGroup.type }}
          }
          {{? $typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes }}
            {{ var $typeChecked = true; }}
            else {
              {{
                var $schemaPath = it.schemaPath + '.type'
                  , $errSchemaPath = it.errSchemaPath + '/type';
              }}
              {{# def.error:'type' }}
            }
          {{?}}
        {{?}}
  
        {{? $breakOnError }}
          if (errors === {{?$top}}0{{??}}errs_{{=$lvl}}{{?}}) {
          {{ $closingBraces2 += '}'; }}
        {{?}}
      {{?}}
    {{~}}
  {{?}}
  
  {{? $typeSchema && !$typeChecked && !$coerceToTypes }}
    {{# def.checkType }}
      {{# def.error:'type' }}
    }
  {{?}}
  
  {{? $breakOnError }} {{= $closingBraces2 }} {{?}}
  
  {{? $top }}
      {{? $async }}
        if (errors === 0) return true;           {{ /* don't edit, used in replace */ }}
        else throw new ValidationError(vErrors); {{ /* don't edit, used in replace */ }}
      {{??}}
        validate.errors = vErrors; {{ /* don't edit, used in replace */ }}
        return errors === 0;       {{ /* don't edit, used in replace */ }}
      {{?}}
    });
  
    return validate;
  {{??}}
    var {{=$valid}} = errors === errs_{{=$lvl}};
  {{?}}
  
  {{# def.cleanUp }}
  
  {{? $top && $breakOnError }}
    {{# def.cleanUpVarErrors }}
  {{?}}
  
  {{
    function $shouldUseGroup($rulesGroup) {
      for (var i=0; i < $rulesGroup.rules.length; i++)
        if ($shouldUseRule($rulesGroup.rules[i]))
          return true;
    }
  
    function $shouldUseRule($rule) {
      return it.schema[$rule.keyword] !== undefined ||
             ( $rule.keyword == 'properties' &&
               ( it.schema.additionalProperties === false ||
                 typeof it.schema.additionalProperties == 'object'
                 || ( it.schema.patternProperties &&
                      Object.keys(it.schema.patternProperties).length )
                 || ( it.opts.v5 && it.schema.patternGroups &&
                      Object.keys(it.schema.patternGroups).length )));
    }
  }};
}).call(this);
