import { Request, Response } from 'express';
import { controller, get } from './decorators/';

@controller('/auth')
class LoginController {

  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
              <form method='POST' action=''>

                <div>
                  <label>Email</label>
                  <input name='email'/>
                </div>

                <div>
                  <label>Password</label>
                  <input name='password' type='password'/>
                </div>
              
                <button type='submit' >Submit</button>
              </form>
        `);
  }
}
