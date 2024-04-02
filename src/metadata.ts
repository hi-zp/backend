/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./cats/dto/create-cat.dto"), { "CreateCatDto": { name: { required: true, type: () => String }, age: { required: true, type: () => Number }, breed: { required: true, type: () => String } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "index": {}, "getPostById": {}, "getPublishedPosts": {}, "getFilteredPosts": {}, "createDraft": {}, "signupUser": {}, "publishPost": {}, "deletePost": {} } }], [import("./cats/cats.controller"), { "CatsController": { "create": {}, "findAll": { type: [Object] }, "findOne": {} } }]] }, "@nestjs/graphql/plugin": { "models": [[import("./recipes/dto/new-recipe.input"), { "NewRecipeInput": { title: {}, description: { nullable: true }, ingredients: {} } }], [import("./recipes/dto/recipes.args"), { "RecipesArgs": { skip: {}, take: {} } }], [import("./recipes/models/recipe.model"), { "Recipe": { id: {}, title: {}, description: { nullable: true }, creationDate: {}, ingredients: {} } }]] } };
};