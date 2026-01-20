
import { BaseClient } from './BaseClient';

export class AuthClient extends BaseClient 
{
  constructor(request) 
  {
    super(request);
  }

  async createToken(payload) 
  {
    const response = await this.postRequest('/auth', payload);
    return response.token;
  }

}