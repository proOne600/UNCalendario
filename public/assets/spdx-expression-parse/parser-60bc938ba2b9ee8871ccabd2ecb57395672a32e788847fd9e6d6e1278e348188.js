/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/

var spdxparse = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[1,7],$V3=[1,4],$V4=[1,9],$V5=[1,10],$V6=[5,14,15,17],$V7=[5,12,14,15,17];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"start":3,"expression":4,"EOS":5,"simpleExpression":6,"LICENSE":7,"PLUS":8,"LICENSEREF":9,"DOCUMENTREF":10,"COLON":11,"WITH":12,"EXCEPTION":13,"AND":14,"OR":15,"OPEN":16,"CLOSE":17,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOS",7:"LICENSE",8:"PLUS",9:"LICENSEREF",10:"DOCUMENTREF",11:"COLON",12:"WITH",13:"EXCEPTION",14:"AND",15:"OR",16:"OPEN",17:"CLOSE"},
productions_: [0,[3,2],[6,1],[6,2],[6,1],[6,3],[4,1],[4,3],[4,3],[4,3],[4,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return this.$ = $$[$0-1]
break;
case 2: case 4: case 5:
this.$ = {license: yytext}
break;
case 3:
this.$ = {license: $$[$0-1], plus: true}
break;
case 6:
this.$ = $$[$0]
break;
case 7:
this.$ = {exception: $$[$0]}
this.$.license = $$[$0-2].license
if ($$[$0-2].hasOwnProperty('plus')) {
  this.$.plus = $$[$0-2].plus
}
break;
case 8:
this.$ = {conjunction: 'and', left: $$[$0-2], right: $$[$0]}
break;
case 9:
this.$ = {conjunction: 'or', left: $$[$0-2], right: $$[$0]}
break;
case 10:
this.$ = $$[$0-1]
break;
}
},
table: [{3:1,4:2,6:3,7:$V0,9:$V1,10:$V2,16:$V3},{1:[3]},{5:[1,8],14:$V4,15:$V5},o($V6,[2,6],{12:[1,11]}),{4:12,6:3,7:$V0,9:$V1,10:$V2,16:$V3},o($V7,[2,2],{8:[1,13]}),o($V7,[2,4]),{11:[1,14]},{1:[2,1]},{4:15,6:3,7:$V0,9:$V1,10:$V2,16:$V3},{4:16,6:3,7:$V0,9:$V1,10:$V2,16:$V3},{13:[1,17]},{14:$V4,15:$V5,17:[1,18]},o($V7,[2,3]),{9:[1,19]},o($V6,[2,8]),o([5,15,17],[2,9],{14:$V4}),o($V6,[2,7]),o($V6,[2,10]),o($V7,[2,5])],
defaultActions: {8:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 5
break;
case 1:/* skip whitespace */
break;
case 2:return 8
break;
case 3:return 16
break;
case 4:return 17
break;
case 5:return 11
break;
case 6:return 10
break;
case 7:return 9
break;
case 8:return 14
break;
case 9:return 15
break;
case 10:return 12
break;
case 11:return 7
break;
case 12:return 7
break;
case 13:return 7
break;
case 14:return 7
break;
case 15:return 7
break;
case 16:return 7
break;
case 17:return 7
break;
case 18:return 7
break;
case 19:return 7
break;
case 20:return 7
break;
case 21:return 7
break;
case 22:return 7
break;
case 23:return 7
break;
case 24:return 13
break;
case 25:return 13
break;
case 26:return 13
break;
case 27:return 13
break;
case 28:return 13
break;
case 29:return 13
break;
case 30:return 13
break;
case 31:return 13
break;
case 32:return 7
break;
case 33:return 13
break;
case 34:return 7
break;
case 35:return 13
break;
case 36:return 7
break;
case 37:return 13
break;
case 38:return 13
break;
case 39:return 7
break;
case 40:return 13
break;
case 41:return 13
break;
case 42:return 13
break;
case 43:return 13
break;
case 44:return 13
break;
case 45:return 7
break;
case 46:return 13
break;
case 47:return 7
break;
case 48:return 7
break;
case 49:return 7
break;
case 50:return 7
break;
case 51:return 7
break;
case 52:return 7
break;
case 53:return 7
break;
case 54:return 7
break;
case 55:return 7
break;
case 56:return 7
break;
case 57:return 7
break;
case 58:return 7
break;
case 59:return 7
break;
case 60:return 7
break;
case 61:return 7
break;
case 62:return 7
break;
case 63:return 13
break;
case 64:return 7
break;
case 65:return 7
break;
case 66:return 13
break;
case 67:return 7
break;
case 68:return 7
break;
case 69:return 7
break;
case 70:return 7
break;
case 71:return 7
break;
case 72:return 7
break;
case 73:return 13
break;
case 74:return 7
break;
case 75:return 13
break;
case 76:return 7
break;
case 77:return 7
break;
case 78:return 7
break;
case 79:return 7
break;
case 80:return 7
break;
case 81:return 7
break;
case 82:return 7
break;
case 83:return 7
break;
case 84:return 7
break;
case 85:return 7
break;
case 86:return 7
break;
case 87:return 7
break;
case 88:return 7
break;
case 89:return 7
break;
case 90:return 7
break;
case 91:return 7
break;
case 92:return 7
break;
case 93:return 7
break;
case 94:return 7
break;
case 95:return 7
break;
case 96:return 7
break;
case 97:return 7
break;
case 98:return 7
break;
case 99:return 7
break;
case 100:return 7
break;
case 101:return 7
break;
case 102:return 7
break;
case 103:return 7
break;
case 104:return 7
break;
case 105:return 7
break;
case 106:return 7
break;
case 107:return 7
break;
case 108:return 7
break;
case 109:return 7
break;
case 110:return 7
break;
case 111:return 7
break;
case 112:return 7
break;
case 113:return 7
break;
case 114:return 7
break;
case 115:return 7
break;
case 116:return 7
break;
case 117:return 7
break;
case 118:return 7
break;
case 119:return 7
break;
case 120:return 7
break;
case 121:return 7
break;
case 122:return 7
break;
case 123:return 7
break;
case 124:return 7
break;
case 125:return 7
break;
case 126:return 7
break;
case 127:return 7
break;
case 128:return 7
break;
case 129:return 7
break;
case 130:return 7
break;
case 131:return 7
break;
case 132:return 7
break;
case 133:return 7
break;
case 134:return 7
break;
case 135:return 7
break;
case 136:return 7
break;
case 137:return 7
break;
case 138:return 7
break;
case 139:return 7
break;
case 140:return 7
break;
case 141:return 7
break;
case 142:return 7
break;
case 143:return 7
break;
case 144:return 7
break;
case 145:return 7
break;
case 146:return 7
break;
case 147:return 7
break;
case 148:return 7
break;
case 149:return 7
break;
case 150:return 7
break;
case 151:return 7
break;
case 152:return 7
break;
case 153:return 7
break;
case 154:return 7
break;
case 155:return 7
break;
case 156:return 7
break;
case 157:return 7
break;
case 158:return 7
break;
case 159:return 7
break;
case 160:return 7
break;
case 161:return 7
break;
case 162:return 7
break;
case 163:return 7
break;
case 164:return 7
break;
case 165:return 7
break;
case 166:return 7
break;
case 167:return 7
break;
case 168:return 7
break;
case 169:return 7
break;
case 170:return 7
break;
case 171:return 7
break;
case 172:return 7
break;
case 173:return 7
break;
case 174:return 7
break;
case 175:return 7
break;
case 176:return 7
break;
case 177:return 7
break;
case 178:return 7
break;
case 179:return 7
break;
case 180:return 7
break;
case 181:return 7
break;
case 182:return 7
break;
case 183:return 7
break;
case 184:return 7
break;
case 185:return 7
break;
case 186:return 7
break;
case 187:return 7
break;
case 188:return 7
break;
case 189:return 7
break;
case 190:return 7
break;
case 191:return 7
break;
case 192:return 7
break;
case 193:return 7
break;
case 194:return 7
break;
case 195:return 7
break;
case 196:return 7
break;
case 197:return 7
break;
case 198:return 7
break;
case 199:return 7
break;
case 200:return 7
break;
case 201:return 7
break;
case 202:return 7
break;
case 203:return 7
break;
case 204:return 7
break;
case 205:return 7
break;
case 206:return 7
break;
case 207:return 7
break;
case 208:return 7
break;
case 209:return 7
break;
case 210:return 7
break;
case 211:return 7
break;
case 212:return 7
break;
case 213:return 7
break;
case 214:return 7
break;
case 215:return 7
break;
case 216:return 7
break;
case 217:return 7
break;
case 218:return 7
break;
case 219:return 7
break;
case 220:return 7
break;
case 221:return 7
break;
case 222:return 7
break;
case 223:return 7
break;
case 224:return 7
break;
case 225:return 7
break;
case 226:return 7
break;
case 227:return 7
break;
case 228:return 7
break;
case 229:return 7
break;
case 230:return 7
break;
case 231:return 7
break;
case 232:return 7
break;
case 233:return 7
break;
case 234:return 7
break;
case 235:return 7
break;
case 236:return 7
break;
case 237:return 7
break;
case 238:return 7
break;
case 239:return 7
break;
case 240:return 7
break;
case 241:return 7
break;
case 242:return 7
break;
case 243:return 7
break;
case 244:return 7
break;
case 245:return 7
break;
case 246:return 7
break;
case 247:return 7
break;
case 248:return 7
break;
case 249:return 7
break;
case 250:return 7
break;
case 251:return 7
break;
case 252:return 7
break;
case 253:return 7
break;
case 254:return 7
break;
case 255:return 7
break;
case 256:return 7
break;
case 257:return 7
break;
case 258:return 7
break;
case 259:return 7
break;
case 260:return 7
break;
case 261:return 7
break;
case 262:return 7
break;
case 263:return 7
break;
case 264:return 7
break;
case 265:return 7
break;
case 266:return 7
break;
case 267:return 7
break;
case 268:return 7
break;
case 269:return 7
break;
case 270:return 7
break;
case 271:return 7
break;
case 272:return 7
break;
case 273:return 7
break;
case 274:return 7
break;
case 275:return 7
break;
case 276:return 7
break;
case 277:return 7
break;
case 278:return 7
break;
case 279:return 7
break;
case 280:return 7
break;
case 281:return 7
break;
case 282:return 7
break;
case 283:return 7
break;
case 284:return 7
break;
case 285:return 7
break;
case 286:return 7
break;
case 287:return 7
break;
case 288:return 7
break;
case 289:return 7
break;
case 290:return 7
break;
case 291:return 7
break;
case 292:return 7
break;
case 293:return 7
break;
case 294:return 7
break;
case 295:return 7
break;
case 296:return 7
break;
case 297:return 7
break;
case 298:return 7
break;
case 299:return 7
break;
case 300:return 7
break;
case 301:return 7
break;
case 302:return 7
break;
case 303:return 7
break;
case 304:return 7
break;
case 305:return 7
break;
case 306:return 7
break;
case 307:return 7
break;
case 308:return 7
break;
case 309:return 7
break;
case 310:return 7
break;
case 311:return 7
break;
case 312:return 7
break;
case 313:return 7
break;
case 314:return 7
break;
case 315:return 7
break;
case 316:return 7
break;
case 317:return 7
break;
case 318:return 7
break;
case 319:return 7
break;
case 320:return 7
break;
case 321:return 7
break;
case 322:return 7
break;
case 323:return 7
break;
case 324:return 7
break;
case 325:return 7
break;
case 326:return 7
break;
case 327:return 7
break;
case 328:return 7
break;
case 329:return 7
break;
case 330:return 7
break;
case 331:return 7
break;
case 332:return 7
break;
case 333:return 7
break;
case 334:return 7
break;
case 335:return 7
break;
case 336:return 7
break;
case 337:return 7
break;
case 338:return 7
break;
case 339:return 7
break;
case 340:return 7
break;
case 341:return 7
break;
case 342:return 7
break;
case 343:return 7
break;
case 344:return 7
break;
case 345:return 7
break;
case 346:return 7
break;
case 347:return 7
break;
case 348:return 7
break;
case 349:return 7
break;
case 350:return 7
break;
case 351:return 7
break;
case 352:return 7
break;
case 353:return 7
break;
case 354:return 7
break;
case 355:return 7
break;
case 356:return 7
break;
case 357:return 7
break;
case 358:return 7
break;
case 359:return 7
break;
case 360:return 7
break;
case 361:return 7
break;
case 362:return 7
break;
case 363:return 7
break;
case 364:return 7
break;
}
},
rules: [/^(?:$)/,/^(?:\s+)/,/^(?:\+)/,/^(?:\()/,/^(?:\))/,/^(?::)/,/^(?:DocumentRef-([0-9A-Za-z-+.]+))/,/^(?:LicenseRef-([0-9A-Za-z-+.]+))/,/^(?:AND)/,/^(?:OR)/,/^(?:WITH)/,/^(?:BSD-3-Clause-No-Nuclear-License-2014)/,/^(?:BSD-3-Clause-No-Nuclear-Warranty)/,/^(?:GPL-2\.0-with-classpath-exception)/,/^(?:GPL-3\.0-with-autoconf-exception)/,/^(?:GPL-2\.0-with-autoconf-exception)/,/^(?:BSD-3-Clause-No-Nuclear-License)/,/^(?:MPL-2\.0-no-copyleft-exception)/,/^(?:GPL-2\.0-with-bison-exception)/,/^(?:GPL-2\.0-with-font-exception)/,/^(?:GPL-2\.0-with-GCC-exception)/,/^(?:CNRI-Python-GPL-Compatible)/,/^(?:GPL-3\.0-with-GCC-exception)/,/^(?:BSD-3-Clause-Attribution)/,/^(?:Classpath-exception-2\.0)/,/^(?:WxWindows-exception-3\.1)/,/^(?:freertos-exception-2\.0)/,/^(?:Autoconf-exception-3\.0)/,/^(?:i2p-gpl-java-exception)/,/^(?:gnu-javamail-exception)/,/^(?:Nokia-Qt-exception-1\.1)/,/^(?:Autoconf-exception-2\.0)/,/^(?:BSD-2-Clause-FreeBSD)/,/^(?:u-boot-exception-2\.0)/,/^(?:zlib-acknowledgement)/,/^(?:Bison-exception-2\.2)/,/^(?:BSD-2-Clause-NetBSD)/,/^(?:CLISP-exception-2\.0)/,/^(?:eCos-exception-2\.0)/,/^(?:BSD-3-Clause-Clear)/,/^(?:Font-exception-2\.0)/,/^(?:FLTK-exception-2\.0)/,/^(?:GCC-exception-2\.0)/,/^(?:Qwt-exception-1\.0)/,/^(?:Libtool-exception)/,/^(?:BSD-3-Clause-LBNL)/,/^(?:GCC-exception-3\.1)/,/^(?:Artistic-1\.0-Perl)/,/^(?:Artistic-1\.0-cl8)/,/^(?:CC-BY-NC-SA-2\.5)/,/^(?:MIT-advertising)/,/^(?:BSD-Source-Code)/,/^(?:CC-BY-NC-SA-4\.0)/,/^(?:LiLiQ-Rplus-1\.1)/,/^(?:CC-BY-NC-SA-3\.0)/,/^(?:BSD-4-Clause-UC)/,/^(?:CC-BY-NC-SA-2\.0)/,/^(?:CC-BY-NC-SA-1\.0)/,/^(?:CC-BY-NC-ND-4\.0)/,/^(?:CC-BY-NC-ND-3\.0)/,/^(?:CC-BY-NC-ND-2\.5)/,/^(?:CC-BY-NC-ND-2\.0)/,/^(?:CC-BY-NC-ND-1\.0)/,/^(?:LZMA-exception)/,/^(?:BitTorrent-1\.1)/,/^(?:CrystalStacker)/,/^(?:FLTK-exception)/,/^(?:SugarCRM-1\.1\.3)/,/^(?:BSD-Protection)/,/^(?:BitTorrent-1\.0)/,/^(?:HaskellReport)/,/^(?:Interbase-1\.0)/,/^(?:StandardML-NJ)/,/^(?:mif-exception)/,/^(?:Frameworx-1\.0)/,/^(?:389-exception)/,/^(?:CC-BY-NC-2\.0)/,/^(?:CC-BY-NC-2\.5)/,/^(?:CC-BY-NC-3\.0)/,/^(?:CC-BY-NC-4\.0)/,/^(?:W3C-19980720)/,/^(?:CC-BY-SA-1\.0)/,/^(?:CC-BY-SA-2\.0)/,/^(?:CC-BY-SA-2\.5)/,/^(?:CC-BY-ND-2\.0)/,/^(?:CC-BY-SA-4\.0)/,/^(?:CC-BY-SA-3\.0)/,/^(?:Artistic-1\.0)/,/^(?:Artistic-2\.0)/,/^(?:CC-BY-ND-2\.5)/,/^(?:CC-BY-ND-3\.0)/,/^(?:CC-BY-ND-4\.0)/,/^(?:CC-BY-ND-1\.0)/,/^(?:BSD-4-Clause)/,/^(?:BSD-3-Clause)/,/^(?:BSD-2-Clause)/,/^(?:CC-BY-NC-1\.0)/,/^(?:bzip2-1\.0\.6)/,/^(?:Unicode-TOU)/,/^(?:CNRI-Jython)/,/^(?:ImageMagick)/,/^(?:Adobe-Glyph)/,/^(?:CUA-OPL-1\.0)/,/^(?:OLDAP-2\.2\.2)/,/^(?:LiLiQ-R-1\.1)/,/^(?:bzip2-1\.0\.5)/,/^(?:LiLiQ-P-1\.1)/,/^(?:OLDAP-2\.0\.1)/,/^(?:OLDAP-2\.2\.1)/,/^(?:CNRI-Python)/,/^(?:XFree86-1\.1)/,/^(?:OSET-PL-2\.1)/,/^(?:Apache-2\.0)/,/^(?:Watcom-1\.0)/,/^(?:PostgreSQL)/,/^(?:Python-2\.0)/,/^(?:RHeCos-1\.1)/,/^(?:EUDatagrid)/,/^(?:Spencer-99)/,/^(?:Intel-ACPI)/,/^(?:CECILL-1\.0)/,/^(?:CECILL-1\.1)/,/^(?:JasPer-2\.0)/,/^(?:CECILL-2\.0)/,/^(?:CECILL-2\.1)/,/^(?:gSOAP-1\.3b)/,/^(?:Spencer-94)/,/^(?:Apache-1\.1)/,/^(?:Spencer-86)/,/^(?:Apache-1\.0)/,/^(?:ClArtistic)/,/^(?:TORQUE-1\.1)/,/^(?:CATOSL-1\.1)/,/^(?:Adobe-2006)/,/^(?:Zimbra-1\.4)/,/^(?:Zimbra-1\.3)/,/^(?:Condor-1\.1)/,/^(?:CC-BY-3\.0)/,/^(?:CC-BY-2\.5)/,/^(?:OLDAP-2\.4)/,/^(?:SGI-B-1\.1)/,/^(?:SISSL-1\.2)/,/^(?:SGI-B-1\.0)/,/^(?:OLDAP-2\.3)/,/^(?:CC-BY-4\.0)/,/^(?:Crossword)/,/^(?:SimPL-2\.0)/,/^(?:OLDAP-2\.2)/,/^(?:OLDAP-2\.1)/,/^(?:ErlPL-1\.1)/,/^(?:LPPL-1\.3a)/,/^(?:LPPL-1\.3c)/,/^(?:OLDAP-2\.0)/,/^(?:Leptonica)/,/^(?:CPOL-1\.02)/,/^(?:OLDAP-1\.4)/,/^(?:OLDAP-1\.3)/,/^(?:CC-BY-2\.0)/,/^(?:Unlicense)/,/^(?:OLDAP-2\.8)/,/^(?:OLDAP-1\.2)/,/^(?:MakeIndex)/,/^(?:OLDAP-2\.7)/,/^(?:OLDAP-1\.1)/,/^(?:Sleepycat)/,/^(?:D-FSL-1\.0)/,/^(?:CC-BY-1\.0)/,/^(?:OLDAP-2\.6)/,/^(?:WXwindows)/,/^(?:NPOSL-3\.0)/,/^(?:FreeImage)/,/^(?:SGI-B-2\.0)/,/^(?:OLDAP-2\.5)/,/^(?:Beerware)/,/^(?:Newsletr)/,/^(?:NBPL-1\.0)/,/^(?:NASA-1\.3)/,/^(?:NLOD-1\.0)/,/^(?:AGPL-1\.0)/,/^(?:OCLC-2\.0)/,/^(?:ODbL-1\.0)/,/^(?:PDDL-1\.0)/,/^(?:Motosoto)/,/^(?:Afmparse)/,/^(?:ANTLR-PD)/,/^(?:LPL-1\.02)/,/^(?:Abstyles)/,/^(?:eCos-2\.0)/,/^(?:APSL-1\.0)/,/^(?:LPPL-1\.2)/,/^(?:LPPL-1\.1)/,/^(?:LPPL-1\.0)/,/^(?:APSL-1\.1)/,/^(?:APSL-2\.0)/,/^(?:Info-ZIP)/,/^(?:Zend-2\.0)/,/^(?:IBM-pibs)/,/^(?:LGPL-2\.0)/,/^(?:LGPL-3\.0)/,/^(?:LGPL-2\.1)/,/^(?:GFDL-1\.3)/,/^(?:PHP-3\.01)/,/^(?:GFDL-1\.2)/,/^(?:GFDL-1\.1)/,/^(?:AGPL-3\.0)/,/^(?:Giftware)/,/^(?:EUPL-1\.1)/,/^(?:RPSL-1\.0)/,/^(?:EUPL-1\.0)/,/^(?:MIT-enna)/,/^(?:CECILL-B)/,/^(?:diffmark)/,/^(?:CECILL-C)/,/^(?:CDDL-1\.0)/,/^(?:Sendmail)/,/^(?:CDDL-1\.1)/,/^(?:CPAL-1\.0)/,/^(?:APSL-1\.2)/,/^(?:NPL-1\.1)/,/^(?:AFL-1\.2)/,/^(?:Caldera)/,/^(?:AFL-2\.0)/,/^(?:FSFULLR)/,/^(?:AFL-2\.1)/,/^(?:VSL-1\.0)/,/^(?:VOSTROM)/,/^(?:UPL-1\.0)/,/^(?:Dotseqn)/,/^(?:CPL-1\.0)/,/^(?:dvipdfm)/,/^(?:EPL-1\.0)/,/^(?:OCCT-PL)/,/^(?:ECL-1\.0)/,/^(?:Latex2e)/,/^(?:ECL-2\.0)/,/^(?:GPL-1\.0)/,/^(?:GPL-2\.0)/,/^(?:GPL-3\.0)/,/^(?:AFL-3\.0)/,/^(?:LAL-1\.2)/,/^(?:LAL-1\.3)/,/^(?:EFL-1\.0)/,/^(?:EFL-2\.0)/,/^(?:gnuplot)/,/^(?:Aladdin)/,/^(?:LPL-1\.0)/,/^(?:libtiff)/,/^(?:Entessa)/,/^(?:AMDPLPA)/,/^(?:IPL-1\.0)/,/^(?:OPL-1\.0)/,/^(?:OSL-1\.0)/,/^(?:OSL-1\.1)/,/^(?:OSL-2\.0)/,/^(?:OSL-2\.1)/,/^(?:OSL-3\.0)/,/^(?:OpenSSL)/,/^(?:ZPL-2\.1)/,/^(?:PHP-3\.0)/,/^(?:ZPL-2\.0)/,/^(?:ZPL-1\.1)/,/^(?:CC0-1\.0)/,/^(?:SPL-1\.0)/,/^(?:psutils)/,/^(?:MPL-1\.0)/,/^(?:QPL-1\.0)/,/^(?:MPL-1\.1)/,/^(?:MPL-2\.0)/,/^(?:APL-1\.0)/,/^(?:RPL-1\.1)/,/^(?:RPL-1\.5)/,/^(?:MIT-CMU)/,/^(?:Multics)/,/^(?:Eurosym)/,/^(?:BSL-1\.0)/,/^(?:MIT-feh)/,/^(?:Saxpath)/,/^(?:Borceux)/,/^(?:OFL-1\.1)/,/^(?:OFL-1\.0)/,/^(?:AFL-1\.1)/,/^(?:YPL-1\.1)/,/^(?:YPL-1\.0)/,/^(?:NPL-1\.0)/,/^(?:iMatix)/,/^(?:mpich2)/,/^(?:APAFML)/,/^(?:Bahyph)/,/^(?:RSA-MD)/,/^(?:psfrag)/,/^(?:Plexus)/,/^(?:eGenix)/,/^(?:Glulxe)/,/^(?:SAX-PD)/,/^(?:Imlib2)/,/^(?:Wsuipa)/,/^(?:LGPLLR)/,/^(?:Libpng)/,/^(?:xinetd)/,/^(?:MITNFA)/,/^(?:NetCDF)/,/^(?:Naumen)/,/^(?:SMPPL)/,/^(?:Nunit)/,/^(?:FSFUL)/,/^(?:GL2PS)/,/^(?:SMLNJ)/,/^(?:Rdisc)/,/^(?:Noweb)/,/^(?:Nokia)/,/^(?:SISSL)/,/^(?:Qhull)/,/^(?:Intel)/,/^(?:Glide)/,/^(?:Xerox)/,/^(?:AMPAS)/,/^(?:WTFPL)/,/^(?:MS-PL)/,/^(?:XSkat)/,/^(?:MS-RL)/,/^(?:MirOS)/,/^(?:RSCPL)/,/^(?:TMate)/,/^(?:OGTSL)/,/^(?:FSFAP)/,/^(?:NCSA)/,/^(?:Zlib)/,/^(?:SCEA)/,/^(?:SNIA)/,/^(?:NGPL)/,/^(?:NOSL)/,/^(?:ADSL)/,/^(?:MTLL)/,/^(?:NLPL)/,/^(?:Ruby)/,/^(?:JSON)/,/^(?:Barr)/,/^(?:0BSD)/,/^(?:Xnet)/,/^(?:Cube)/,/^(?:curl)/,/^(?:DSDP)/,/^(?:Fair)/,/^(?:HPND)/,/^(?:TOSL)/,/^(?:IJG)/,/^(?:SWL)/,/^(?:Vim)/,/^(?:FTL)/,/^(?:ICU)/,/^(?:OML)/,/^(?:NRL)/,/^(?:DOC)/,/^(?:TCL)/,/^(?:W3C)/,/^(?:NTP)/,/^(?:IPA)/,/^(?:ISC)/,/^(?:X11)/,/^(?:AAL)/,/^(?:AML)/,/^(?:xpp)/,/^(?:Zed)/,/^(?:MIT)/,/^(?:Mup)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = spdxparse;
exports.Parser = spdxparse.Parser;
exports.parse = function () { return spdxparse.parse.apply(spdxparse, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
;
