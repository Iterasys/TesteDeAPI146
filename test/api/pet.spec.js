// Bibliotecas e frameworks
const supertest = require('supertest')

const petId = 1001

describe('API PetStore Swagger - Entidade Pet', () => {
    // Atributos, objetos, constantes e variáveis
    const request = supertest('https://petstore.swagger.io/v2') // Base URL

    // Funções e métodos = it
    // Incluir animal
    it('POST Pet', () => {
        const pet = require('../../vendors/json/pet.json')

        return request
            .post('/pet')
            .send(pet)
            .then((response) => {
                expect(response.statusCode).toBe(200)
                expect(response.body.id).toBe(petId)
                expect(response.body.name).toBe('Snoopy')
                expect(response.body.category.name).toBe('dog')
                expect(response.body.tags[0].name).toBe('vacinado')
            })
    }) // Final do POST

})