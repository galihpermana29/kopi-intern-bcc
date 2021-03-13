export const storeId = async (data) => {
   localStorage.setItem('id', JSON.stringify(data.data.message.id));
}

export const getId = () => {
   const userId = JSON.parse(localStorage.getItem('id'));
   return userId;
}