const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let theater1 = await promiseTheaterIXX();
    let theater2 = await promiseTheaterVGC();
    let hasil = (await theater1).concat(await theater2);
    let jumlahEmosi = 0;
    hasil.map((theater1) => theater1.hasil === emosi && (jumlahEmosi += 1));
    return jumlahEmosi;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
