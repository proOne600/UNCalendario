var test=require("tape"),JSONStream=require("../"),testData='{"rows":[{"hello":"world"}, {"foo": "bar"}]}';test("basic parsing",function(e){e.plan(2);var t=JSONStream.parse("rows.*"),a={};t.on("data",function(e){a[Object.keys(e)[0]]=!0}),t.on("end",function(){e.equal(!!a.hello,!0),e.equal(!!a.foo,!0)}),t.write(testData),t.end()});