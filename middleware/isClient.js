const isClient = (req, res, next) => {
  if ((req.user) && (req.user.role === "client" || req.user.role === "Client" || req.user.role === "CLIENT")) {
    next()
  } else {
    res.status(401).json({
      success: false,
      message: 'Not a client'
    })
  }
}

export default isClient