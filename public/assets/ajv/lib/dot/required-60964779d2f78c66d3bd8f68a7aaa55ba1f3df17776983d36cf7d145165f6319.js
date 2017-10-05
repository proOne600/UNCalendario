(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/required"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.missing }}
  {{# def.setupKeyword }}
  {{# def.$data }}
  
  {{ var $vSchema = 'schema' + $lvl; }}
  
  {{## def.setupLoop:
    {{? !$isData }}
      var {{=$vSchema}} = validate.schema{{=$schemaPath}};
    {{?}}
  
    {{
      var $i = 'i' + $lvl
        , $propertyPath = 'schema' + $lvl + '[' + $i + ']'
        , $missingProperty = '\' + ' + $propertyPath + ' + \'';
      if (it.opts._errorDataPathProperty) {
        it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
      }
    }}
  #}}
  
  
  {{? !$isData }}
    {{? $schema.length < it.opts.loopRequired &&
        it.schema.properties && Object.keys(it.schema.properties).length }}
      {{ var $required = []; }}
      {{~ $schema:$property }}
        {{ var $propertySch = it.schema.properties[$property]; }}
        {{? !($propertySch && {{# def.nonEmptySchema:$propertySch}}) }}
          {{ $required[$required.length] = $property; }}
        {{?}}
      {{~}}
    {{??}}
      {{ var $required = $schema; }}
    {{?}}
  {{?}}
  
  
  {{? $isData || $required.length }}
    {{
      var $currentErrorPath = it.errorPath
        , $loopRequired = $isData || $required.length >= it.opts.loopRequired;
    }}
  
    {{? $breakOnError }}
      var missing{{=$lvl}};
      {{? $loopRequired }}
        {{# def.setupLoop }}
        var {{=$valid}} = true;
  
        {{?$isData}}{{# def.check$dataIsArray }}{{?}}
  
        for (var {{=$i}} = 0; {{=$i}} < {{=$vSchema}}.length; {{=$i}}++) {
          {{=$valid}} = {{=$data}}[{{=$vSchema}}[{{=$i}}]] !== undefined;
          if (!{{=$valid}}) break;
        }
  
        {{? $isData }}  }  {{?}}
  
        {{# def.checkError:'required' }}
        else {
      {{??}}
        if ({{# def.checkMissingProperty:$required }}) {
          {{# def.errorMissingProperty:'required' }}
        } else {
      {{?}}
    {{??}}
      {{? $loopRequired }}
        {{# def.setupLoop }}
        {{? $isData }}
          if ({{=$vSchema}} && !Array.isArray({{=$vSchema}})) {
            {{# def.addError:'required' }}
          } else if ({{=$vSchema}} !== undefined) {
        {{?}}
  
        for (var {{=$i}} = 0; {{=$i}} < {{=$vSchema}}.length; {{=$i}}++) {
          if ({{=$data}}[{{=$vSchema}}[{{=$i}}]] === undefined) {
            {{# def.addError:'required' }}
          }
        }
  
        {{? $isData }}  }  {{?}}
      {{??}}
        {{~ $required:$reqProperty }}
          {{# def.allErrorsMissingProperty:'required' }}
        {{~}}
      {{?}}
    {{?}}
  
    {{ it.errorPath = $currentErrorPath; }}
  
  {{?? $breakOnError }}
    if (true) {
  {{?}};
}).call(this);
