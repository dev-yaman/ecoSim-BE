const axios = require('axios');

exports.getPlansByIsoCode = async (req, res) => {
  try {
    const { isoCode } = req.params;

    const apiUrl = `https://api.esim-go.com/v2.2/catalogue?page=1&perPage=10&countries=${isoCode}`;
    const headers = {
      'X-API-Key': '7Rg58xP_6C2kk7twAKrn1yTGpj5xTsKRKLlve1DJ'
    };

    const response = await axios.get(apiUrl, { headers });

    // Assuming the response data contains the plans you want to return
    const plans = response.data;

    res.json(plans); // Return the isoCode and plans
  } catch (error) {
    let errorMessage = error?.response?.data?.message ?? 'An error occurred while fetching data plans.';
    res.status(500).json({ message:  errorMessage});
  }
};
