import { Request, Response, Router } from 'express';

const router: Router = Router()

router.get('/:name?', (req: Request, res: Response) => {
  const { name } = req.params
  name ? res.send(`Hello, ${name}!`) : res.send('Hello, World!')
})

export const WelcomeCtrl: Router = router
