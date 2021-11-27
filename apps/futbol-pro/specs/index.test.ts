import { Selector } from 'testcafe'

fixture("Test de index").page('http://localhost:4200/')

test("Text lista de paises", async t => {
    await t.expect(Selector('#CountryCard').count).gte(163, "Paises cargados incorrectamente", { timeout: 8000 });
});
test("Text total de paises", async t => {
    await t.expect(Selector('#Titulocabera').textContent).eql(`List of countries 163`, "Total de paises cargados incorrectamente", { timeout: 8000 });
});