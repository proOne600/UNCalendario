(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/anyOf"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.setupKeyword }}
  {{# def.setupNextLevel }}
  
  {{
    var $noEmptySchema = $schema.every(function($sch) {
      return {{# def.nonEmptySchema:$sch }};
    });
  }}
  {{? $noEmptySchema }}
    {{ var $currentBaseId = $it.baseId; }}
    var {{=$errs}} = errors;
    var {{=$valid}} = false;
  
    {{# def.setCompositeRule }}
  
    {{~ $schema:$sch:$i }}
      {{
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
      }}
  
      {{# def.insertSubschemaCode }}
  
      {{=$valid}} = {{=$valid}} || {{=$nextValid}};
  
      if (!{{=$valid}}) {
      {{ $closingBraces += '}'; }}
    {{~}}
  
    {{# def.resetCompositeRule }}
  
    {{= $closingBraces }}
  
    if (!{{=$valid}}) {
      {{# def.addError:'anyOf' }}
    } else {
      {{# def.resetErrors }}
    {{? it.opts.allErrors }} } {{?}}
  
    {{# def.cleanUp }}
  {{??}}
    {{? $breakOnError }}
      if (true) {
    {{?}}
  {{?}};
}).call(this);
