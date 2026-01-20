
export class BaseClient 
{
  constructor(request) 
  {
    this.request = request;
    this.baseUrl = 'https://restful-booker.herokuapp.com'; 
  }

  async getRequest(endpoint) 
  {
    const response = await this.request.get(`${this.baseUrl}${endpoint}`);

    return response;
  }

  async postRequest(endpoint, payload) {
    const response = await this.request.post(`${this.baseUrl}${endpoint}`, {
      headers: {
                 "Content-Type": "application/json"
               },
      data: payload });
  
    return response;
  }


    async updateRequest(endpoint,payload,token)
    {
        const response = await this.request.put(`${this.baseUrl}${endpoint}`, {
      headers: {
                 "Content-Type": "application/json",
                 "Accept": "application/json",
                 "Cookie": "token="+`${token}`

               },
      data: payload });

        return response;
    }

    async partialupdateRequest(endpoint,payload,token)
    {
        const response = await this.request.patch(`${this.baseUrl}${endpoint}`, {
      headers: {
                 "Content-Type": "application/json",
                 "Accept": "application/json",
                 "Cookie": "token="+`${token}`

               },
      data: payload });

        return response;
    }

      async deleteRequest(endpoint,token)
    {
        const response = await this.request.delete(`${this.baseUrl}${endpoint}`, {
      headers: {
                 "Content-Type": "application/json",
                 "Cookie": "token="+`${token}`

               }});

        return response;
    }

}

