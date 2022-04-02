
const zeroPad = (num, places) => String(num).padStart(places, '0');


const genConsecutivo = (previo) => {
    const consecutivoSplited = previo.split('-');
    return consecutivoSplited[0] + '-' + zeroPad(parseInt( consecutivoSplited[1] ) + 1, 6);
}

export default genConsecutivo;