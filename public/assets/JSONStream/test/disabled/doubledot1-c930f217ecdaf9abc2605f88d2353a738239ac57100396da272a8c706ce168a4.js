var fs=require("fs"),join=require("path").join,file=join(__dirname,"fixtures","all_npm.json"),JSONStream=require("../"),it=require("it-is"),expected=JSON.parse(fs.readFileSync(file)),parser=JSONStream.parse("rows..rev"),called=0,ended=!1,parsed=[];fs.createReadStream(file).pipe(parser),parser.on("data",function(e){called++,parsed.push(e)}),parser.on("end",function(){ended=!0}),process.on("exit",function(){it(called).equal(expected.rows.length);for(var e=0;e<expected.rows.length;e++)it(parsed[e]).deepEqual(expected.rows[e].value.rev);console.error("PASSED")});