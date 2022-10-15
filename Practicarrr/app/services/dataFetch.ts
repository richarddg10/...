export const llamarApi = async () => {
    const linkData = await fetch('https://ghibliapi.herokuapp.com/films'); 
    const data = await linkData.json();
    console.log(data);
    return data;
};