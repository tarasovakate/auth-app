import { TOKENS } from '../constants';
import { IUserLoginDto } from '../dto/UserLoginDto';
import { safeJSONParser } from '../utils/safeJSONParser';

export class TokenService {
  static async generatePairTokens(loginData: IUserLoginDto): Promise<{
    name: string;
    regData: string;
    accessToken: string;
    refreshToken: string;
  }> {
    // make request to the backend
    return await new Promise((res) =>
      setTimeout(
        () =>
          res({
            name: 'user',
            regData: Date.now().toString(),
            accessToken: `${loginData.username}${loginData.password}`,
            refreshToken: `${loginData.username}${loginData.password}${
              Date.now() * Math.random()
            }`,
          }),
        600,
      ),
    );
  }

  static getPairTokens(): {
    accessToken: string | null;
    refreshToken: string | null;
  } {
    return {
      accessToken: safeJSONParser(localStorage.getItem(TOKENS.ACCESS)),
      refreshToken: safeJSONParser(localStorage.getItem(TOKENS.REFRESH)),
    };
  }

  static clearPairTokens() {
    localStorage.removeItem(TOKENS.ACCESS);
    localStorage.removeItem(TOKENS.REFRESH);
  }
}
