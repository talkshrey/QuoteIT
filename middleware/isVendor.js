const isClient = (req, res, next) => {
  if ((req.user) && (req.user.role === "vendor" || req.user.role === "Vendor" || req.user.role === "VENDOR")) {
    next()
  } else {
    res.status(401).json({
      success: false,
      message: 'Not a vendor'
    })
  }
}

export default isClient