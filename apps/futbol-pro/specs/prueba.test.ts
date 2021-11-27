import {Selector} from 'testcafe'

fixture("Test de index").page('http://localhost:4200/')

test("Test 1", async t=>{
    await t.expect(Selector('#tituloPaises').exists).eql(true,"",{timeout:5000});
});