import {Selector} from 'testcafe'

fixture("Test de players").page('http://localhost:4200/players/8/366')

test("Text lista de players", async t=>{
    await t.expect(Selector('#PlayerCard').count).gte(11,"Jugadores cargados incorrectamente",{timeout:8000});
});
test("Estadio del equipo", async t=>{
    await t.expect(Selector('#StadiumCard').count).eql(1,"Estadio cargado incorrectamente",{timeout:8000});
});
