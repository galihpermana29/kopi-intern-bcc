import kopi from './kopi';
import { getId } from './userId';

export const setCount = async (authTokens) => {
   const userId = getId();
	await kopi
		.get(`/api/carts/amounts/${userId}`, {
			headers: {
				Authorization: `Bearer ${authTokens}`,
			},
		})
		.then((res) => {
         localStorage.setItem('count', res.data.message[0]['count(product_name)'])
         return ;
		});
};

export const getCount = () => {
   const counter = JSON.parse(localStorage.getItem('count'));
   return counter;
}
