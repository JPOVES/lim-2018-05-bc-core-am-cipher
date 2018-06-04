describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ") ,"HIJKLMNOPQRSTUVWXYZABCDEFG")
    });

    it('debería retornar "qlzzpjh LZ Shivyhavyph" para "jessica ES Laboratoria" con offest 33', ()=> {
      assert.equal(cipher.encode(33,"jessica ES Laboratoria"),"qlzzpjh LZ Shivyhavyph")
   });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', ()=> {
       assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

    it('debería retornar "jessica ES Laboratoria" para "qlzzpjh LZ Shivyhavyph" con offest 33', ()=> {
      assert.equal(cipher.decode(33,"qlzzpjh LZ Shivyhavyph"),"jessica ES Laboratoria")
   });

  }); 


  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });
});

/*createCipherWithOffset : (offset) => {
    let exit = {
      encode: (string) => {
        return cipher.encode(offset,string);
      },
      decode: (string) => {
        return cipher.decode(offset,string);
      },
  },
  return exit;   
 }, */   