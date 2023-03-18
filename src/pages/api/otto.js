import { checkPrice } from '../../component/otto'
export default async function handler(req, res) {
    const priceNumber = await checkPrice();
    res.status(200).json({ price: priceNumber });
}