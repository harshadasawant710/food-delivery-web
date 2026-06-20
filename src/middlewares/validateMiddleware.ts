
class ValidateMiddleware{
  public validate(schema: any){
 return (req: any, res: any, next: any) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      console.error({
        method: req.method,
        url: req.originalUrl,
        body: req.body,
        message:error.message
      })
      return res.status(400).json({
        success: false,
        errors: error.details.map((err: any) => err.message),
      });
    }

    next();
  };
  }
}
// const validateMiddleware = (schema: any) => {
//   return (req: any, res: any, next: any) => {
//     const { error } = schema.validate(req.body, {
//       abortEarly: false,
//     });

//     if (error) {
//       loggerObj.logger.error({
//         method: req.method,
//         url: req.originalUrl,
//         body: req.body,
//         message:error.message
//       })
//       return res.status(400).json({
//         success: false,
//         errors: error.details.map((err: any) => err.message),
//       });
//     }

//     next();
//   };
// };

export default new ValidateMiddleware;