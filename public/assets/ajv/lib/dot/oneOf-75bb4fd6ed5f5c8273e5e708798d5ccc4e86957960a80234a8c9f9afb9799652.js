(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/oneOf"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.setupKeyword }}
  {{# def.setupNextLevel }}
  
  var {{=$errs}} = errors;
  var prevValid{{=$lvl}} = false;
  var {{=$valid}} = false;
  
  {{ var $currentBaseId = $it.baseId; }}
  {{# def.setCompositeRule }}
  
  {{~ $schema:$sch:$i }}
    {{? {{# def.nonEmptySchema:$sch }} }}
      {{
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
      }}
  
      {{# def.insertSubschemaCode }}
    {{??}}
      var {{=$nextValid}} = true;
    {{?}}
  
    {{? $i }}
      if ({{=$nextValid}} && prevValid{{=$lvl}})
        {{=$valid}} = false;
      else {
      {{ $closingBraces += '}'; }}
    {{?}}
  
      if ({{=$nextValid}}) {{=$valid}} = prevValid{{=$lvl}} = true;
  {{~}}
  
  {{# def.resetCompositeRule }}
  
  {{= $closingBraces }}
  
  if (!{{=$valid}}) {
    {{# def.error:'oneOf' }}
  } else {
    {{# def.resetErrors }}
  {{? it.opts.allErrors }} } {{?}};
}).call(this);
