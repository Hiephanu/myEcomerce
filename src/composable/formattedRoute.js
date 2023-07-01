const formattedRoute=(array,str)=> {
    return array.map((type) => {
        const normalizedType = type.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const formattedType = `/${normalizedType.toLowerCase().replace(/\s+/g, "-")}`;
        return `${str}${formattedType}`;
    });
}
export default formattedRoute