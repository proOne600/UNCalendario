(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/properties"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.setupKeyword }}
  {{# def.setupNextLevel }}
  
  
  {{## def.validateAdditional:
    {{ /* additionalProperties is schema */
      $it.schema = $aProperties;
      $it.schemaPath = it.schemaPath + '.additionalProperties';
      $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
      $it.errorPath = it.opts._errorDataPathProperty
                      ? it.errorPath
                      : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
      var $passData = $data + '[' + $key + ']';
      $it.dataPathArr[$dataNxt] = $key;
    }}
  
    {{# def.generateSubschemaCode }}
    {{# def.optimizeValidate }}
  #}}
  
  
  {{
    var $key = 'key' + $lvl
      , $dataNxt = $it.dataLevel = it.dataLevel + 1
      , $nextData = 'data' + $dataNxt;
  
    var $schemaKeys = Object.keys($schema || {})
      , $pProperties = it.schema.patternProperties || {}
      , $pPropertyKeys = Object.keys($pProperties)
      , $aProperties = it.schema.additionalProperties
      , $someProperties = $schemaKeys.length || $pPropertyKeys.length
      , $noAdditional = $aProperties === false
      , $additionalIsSchema = typeof $aProperties == 'object'
                                && Object.keys($aProperties).length
      , $removeAdditional = it.opts.removeAdditional
      , $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional
      , $ownProperties = it.opts.ownProperties
      , $currentBaseId = it.baseId;
  
    var $required = it.schema.required;
    if ($required && !(it.opts.v5 && $required.$data) && $required.length < it.opts.loopRequired)
      var $requiredHash = it.util.toHash($required);
  
    if (it.opts.v5) {
      var $pgProperties = it.schema.patternGroups || {}
        , $pgPropertyKeys = Object.keys($pgProperties);
    }
  }}
  
  
  var {{=$errs}} = errors;
  var {{=$nextValid}} = true;
  
  {{? $checkAdditional }}
    for (var {{=$key}} in {{=$data}}) {
      {{# def.checkOwnProperty }}
      {{? $someProperties }}
        var isAdditional{{=$lvl}} = !(false
          {{? $schemaKeys.length }}
            {{? $schemaKeys.length > 5 }}
              || validate.schema{{=$schemaPath}}[{{=$key}}]
            {{??}}
              {{~ $schemaKeys:$propertyKey }}
                || {{=$key}} == {{= it.util.toQuotedString($propertyKey) }}
              {{~}}
            {{?}}
          {{?}}
          {{? $pPropertyKeys.length }}
            {{~ $pPropertyKeys:$pProperty:$i }}
              || {{= it.usePattern($pProperty) }}.test({{=$key}})
            {{~}}
          {{?}}
          {{? it.opts.v5 && $pgPropertyKeys && $pgPropertyKeys.length }}
            {{~ $pgPropertyKeys:$pgProperty:$i }}
              || {{= it.usePattern($pgProperty) }}.test({{=$key}})
            {{~}}
          {{?}}
        );
  
        if (isAdditional{{=$lvl}}) {
      {{?}}
      {{? $removeAdditional == 'all' }}
        delete {{=$data}}[{{=$key}}];
      {{??}}
        {{
          var $currentErrorPath = it.errorPath;
          var $additionalProperty = '\' + ' + $key + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          }
        }}
        {{? $noAdditional }}
          {{? $removeAdditional }}
            delete {{=$data}}[{{=$key}}];
          {{??}}
            {{=$nextValid}} = false;
            {{
              var $currErrSchemaPath = $errSchemaPath;
              $errSchemaPath = it.errSchemaPath + '/additionalProperties';
            }}
            {{# def.error:'additionalProperties' }}
            {{ $errSchemaPath = $currErrSchemaPath; }}
            {{? $breakOnError }} break; {{?}}
          {{?}}
        {{?? $additionalIsSchema }}
          {{? $removeAdditional == 'failing' }}
            var {{=$errs}} = errors;
            {{# def.setCompositeRule }}
  
            {{# def.validateAdditional }}
  
            if (!{{=$nextValid}}) {
              errors = {{=$errs}};
              if (validate.errors !== null) {
                if (errors) validate.errors.length = errors;
                else validate.errors = null;
              }
              delete {{=$data}}[{{=$key}}];
            }
  
            {{# def.resetCompositeRule }}
          {{??}}
            {{# def.validateAdditional }}
            {{? $breakOnError }} if (!{{=$nextValid}}) break; {{?}}
          {{?}}
        {{?}}
        {{ it.errorPath = $currentErrorPath; }}
      {{?}}
      {{? $someProperties }}
        }
      {{?}}
    }
  
    {{# def.ifResultValid }}
  {{?}}
  
  {{ var $useDefaults = it.opts.useDefaults && !it.compositeRule; }}
  
  {{? $schemaKeys.length }}
    {{~ $schemaKeys:$propertyKey }}
      {{ var $sch = $schema[$propertyKey]; }}
  
      {{? {{# def.nonEmptySchema:$sch}} }}
        {{
          var $prop = it.util.getProperty($propertyKey)
            , $passData = $data + $prop
            , $hasDefault = $useDefaults && $sch.default !== undefined;
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + $prop;
          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
          $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
          $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
        }}
  
        {{# def.generateSubschemaCode }}
  
        {{? {{# def.willOptimize }} }}
          {{
            $code = {{# def._optimizeValidate }};
            var $useData = $passData;
          }}
        {{??}}
          {{ var $useData = $nextData; }}
          var {{=$nextData}} = {{=$passData}};
        {{?}}
  
        {{? $hasDefault }}
          {{= $code }}
        {{??}}
          {{? $requiredHash && $requiredHash[$propertyKey] }}
            if ({{=$useData}} === undefined) {
              {{=$nextValid}} = false;
              {{
                var $currentErrorPath = it.errorPath
                  , $currErrSchemaPath = $errSchemaPath
                  , $missingProperty = it.util.escapeQuotes($propertyKey);
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                $errSchemaPath = it.errSchemaPath + '/required';
              }}
              {{# def.error:'required' }}
              {{ $errSchemaPath = $currErrSchemaPath; }}
              {{ it.errorPath = $currentErrorPath; }}
            } else {
          {{??}}
            {{? $breakOnError }}
              if ({{=$useData}} === undefined) {
                {{=$nextValid}} = true;
              } else {
            {{??}}
              if ({{=$useData}} !== undefined) {
            {{?}}
          {{?}}
  
            {{= $code }}
          }
        {{?}}  {{ /* $hasDefault */ }}
      {{?}} {{ /* def.nonEmptySchema */ }}
  
      {{# def.ifResultValid }}
    {{~}}
  {{?}}
  
  {{~ $pPropertyKeys:$pProperty }}
    {{ var $sch = $pProperties[$pProperty]; }}
  
    {{? {{# def.nonEmptySchema:$sch}} }}
      {{
        $it.schema = $sch;
        $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
        $it.errSchemaPath = it.errSchemaPath + '/patternProperties/'
                                             + it.util.escapeFragment($pProperty);
      }}
  
      for (var {{=$key}} in {{=$data}}) {
        {{# def.checkOwnProperty }}
        if ({{= it.usePattern($pProperty) }}.test({{=$key}})) {
          {{
            $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
            var $passData = $data + '[' + $key + ']';
            $it.dataPathArr[$dataNxt] = $key;
          }}
  
          {{# def.generateSubschemaCode }}
          {{# def.optimizeValidate }}
  
          {{? $breakOnError }} if (!{{=$nextValid}}) break; {{?}}
        }
        {{? $breakOnError }} else {{=$nextValid}} = true; {{?}}
      }
  
      {{# def.ifResultValid }}
    {{?}} {{ /* def.nonEmptySchema */ }}
  {{~}}
  
  
  {{? it.opts.v5 }}
    {{~ $pgPropertyKeys:$pgProperty }}
      {{
        var $pgSchema = $pgProperties[$pgProperty]
          , $sch = $pgSchema.schema;
      }}
  
      {{? {{# def.nonEmptySchema:$sch}} }}
        {{
          $it.schema = $sch;
          $it.schemaPath = it.schemaPath + '.patternGroups' + it.util.getProperty($pgProperty) + '.schema';
          $it.errSchemaPath = it.errSchemaPath + '/patternGroups/'
                                               + it.util.escapeFragment($pgProperty)
                                               + '/schema';
        }}
  
        var pgPropCount{{=$lvl}} = 0;
  
        for (var {{=$key}} in {{=$data}}) {
          {{# def.checkOwnProperty }}
          if ({{= it.usePattern($pgProperty) }}.test({{=$key}})) {
            pgPropCount{{=$lvl}}++;
  
            {{
              $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + '[' + $key + ']';
              $it.dataPathArr[$dataNxt] = $key;
            }}
  
            {{# def.generateSubschemaCode }}
            {{# def.optimizeValidate }}
  
            {{? $breakOnError }} if (!{{=$nextValid}}) break; {{?}}
          }
          {{? $breakOnError }} else {{=$nextValid}} = true; {{?}}
        }
  
        {{# def.ifResultValid }}
  
        {{
          var $pgMin = $pgSchema.minimum
            , $pgMax = $pgSchema.maximum;
        }}
        {{? $pgMin !== undefined || $pgMax !== undefined }}
          var {{=$valid}} = true;
  
          {{ var $currErrSchemaPath = $errSchemaPath; }}
  
          {{? $pgMin !== undefined }}
            {{ var $limit = $pgMin, $reason = 'minimum', $moreOrLess = 'less'; }}
            {{=$valid}} = pgPropCount{{=$lvl}} >= {{=$pgMin}};
            {{ $errSchemaPath = it.errSchemaPath + '/patternGroups/minimum'; }}
            {{# def.checkError:'patternGroups' }}
            {{? $pgMax !== undefined }}
              else
            {{?}}
          {{?}}
  
          {{? $pgMax !== undefined }}
            {{ var $limit = $pgMax, $reason = 'maximum', $moreOrLess = 'more'; }}
            {{=$valid}} = pgPropCount{{=$lvl}} <= {{=$pgMax}};
            {{ $errSchemaPath = it.errSchemaPath + '/patternGroups/maximum'; }}
            {{# def.checkError:'patternGroups' }}
          {{?}}
  
          {{ $errSchemaPath = $currErrSchemaPath; }}
  
          {{# def.ifValid }}
        {{?}}
      {{?}} {{ /* def.nonEmptySchema */ }}
    {{~}}
  {{?}}
  
  
  {{? $breakOnError }}
    {{= $closingBraces }}
    if ({{=$errs}} == errors) {
  {{?}}
  
  {{# def.cleanUp }};
}).call(this);
