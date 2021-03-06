(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/v5/patternRequired"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.setupKeyword }}
  
  {{
    var $key = 'key' + $lvl
      , $matched = 'patternMatched' + $lvl
      , $closingBraces = ''
      , $ownProperties = it.opts.ownProperties;
  }}
  
  var {{=$valid}} = true;
  {{~ $schema:$pProperty }}
    var {{=$matched}} = false;
    for (var {{=$key}} in {{=$data}}) {
      {{# def.checkOwnProperty }}
      {{=$matched}} = {{= it.usePattern($pProperty) }}.test({{=$key}});
      if ({{=$matched}}) break;
    }
  
    {{ var $missingPattern = it.util.escapeQuotes($pProperty); }}
    if (!{{=$matched}}) {
      {{=$valid}} = false;
      {{# def.addError:'patternRequired' }}
    } {{# def.elseIfValid }}
  {{~}}
  
  {{= $closingBraces }};
}).call(this);
