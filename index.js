// Import stylesheets
import './style.css';
import { schema } from './schema';
import { schema2 } from './schema2';
import {
  parse,
  buildASTSchema,
  printSchema,
  valueFromASTUntyped,
  parseValue,
  concatAST,
} from 'graphql';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var ast = parse(schema);
var ast2 = parse(schema2);
var toCombine = [ast, ast2];
console.log(ast);
var gqlSchema = buildASTSchema(ast, { assumeValid: true });
var gqlSchema2 = buildASTSchema(concatAST(toCombine), { assumeValid: true });

console.log(parse(printSchema(gqlSchema)));
console.log(printSchema(gqlSchema2));

//console.log(printSchema(gqlSchema));
//console.log(parseValue(schema));
//console.log(valueFromASTUntyped(ast)); - undefined
//console.log(ast.definitions[3]);
