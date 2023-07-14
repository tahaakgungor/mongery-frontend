import axios from 'axios';
import { Constants } from '../links';
import { getToken } from '../redux/token/actions';
import { useRedux } from '../hooks';

export const addProduct = async (productData: any) => {
    const {appSelector}= useRedux()
  try {
    // Token'i al
    const token = appSelector((state)=>state.Token.token)

    // GraphQL sorgusu
    const query = `
      mutation CreateProduct($input: CreateProductInput!) {
        createProduct(createProductInput: $input) {
          id
          image
          title
          stateId
          categoryId
          price
          stock
          variant
          createdAt
          updatedAt
          customInputs {
            key
            value
          }
        }
      }
    `;

    // GraphQL isteği gönder
    const response = await axios.post(
      Constants.API,
      {
        query,
        variables: {
          input: productData,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // İstek başarılıysa yeni ürünün verilerini döndür
    return response.data.data.createProduct;
  } catch (error) {
    // İstek başarısızsa hata fırlat
    console.log(error);
  }
};
