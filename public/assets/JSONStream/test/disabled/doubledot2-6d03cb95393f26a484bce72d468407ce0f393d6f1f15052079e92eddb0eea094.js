var fs=require("fs"),join=require("path").join,file=join(__dirname,"fixtures","depth.json"),JSONStream=require("../"),it=require("it-is"),expected=JSON.parse(fs.readFileSync(file)),parser=JSONStream.parse(["docs",{recurse:!0},"value"]),called=0,ended=!1,parsed=[];fs.createReadStream(file).pipe(parser),parser.on("data",function(e){called++,parsed.push(e)}),parser.on("end",function(){ended=!0}),process.on("exit",function(){it(called).equal(5);for(var e=0;e<5;e++)it(parsed[e]).deepEqual(e);console.error("PASSED")});