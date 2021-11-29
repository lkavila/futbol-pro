import {Selector} from 'testcafe'

fixture("Test de teams").page('http://localhost:4200/teams/Colombia')

test("Text lista de equipos", async t=>{
    await t.expect(Selector('#TeamCard').count).gte(55,"Equipos cargados incorrectamente",{timeout:8000});
});
