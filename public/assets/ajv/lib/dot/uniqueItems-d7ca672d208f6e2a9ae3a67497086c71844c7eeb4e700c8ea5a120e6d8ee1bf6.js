(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/uniqueItems"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.setupKeyword }}
  {{# def.$data }}
  
  
  {{? ($schema || $isData) && it.opts.uniqueItems !== false }}
    {{? $isData }}
      var {{=$valid}};
      if ({{=$schemaValue}} === false || {{=$schemaValue}} === undefined)
        {{=$valid}} = true;
      else if (typeof {{=$schemaValue}} != 'boolean')
        {{=$valid}} = false;
      else {
    {{?}}
  
    var {{=$valid}} = true;
    if ({{=$data}}.length > 1) {
      var i = {{=$data}}.length, j;
      outer:
      for (;i--;) {
        for (j = i; j--;) {
          if (equal({{=$data}}[i], {{=$data}}[j])) {
            {{=$valid}} = false;
            break outer;
          }
        }
      }
    }
  
    {{? $isData }}  }  {{?}}
  
    if (!{{=$valid}}) {
      {{# def.error:'uniqueItems' }}
    } {{? $breakOnError }} else { {{?}}
  {{??}}
    {{? $breakOnError }} if (true) { {{?}}
  {{?}};
}).call(this);
