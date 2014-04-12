var assert = require("assert")
var should = require("should")

function analyze(text) {
  return text;
}

describe('EscrevaBem', function(){
  describe('analisar texto', function(){
    it('deve retornar vazio quando passar um texto vazio', function(){
      analyze('').should.equal('');
    });

    it('deve retornar batata quando passar batata', function(){
      analyze('batata').should.equal('batata');
    });

  });
});

