const multer = require("multer");

const path = require("path");

const tempDir = path.join(__dirname, "../../", "tmp");

console.log(tempDir);

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 2048,
  },
});

const uploadMiddleware = multer({ storage: multerConfig });

module.exports = { uploadMiddleware };

// router.post("/avatars", upload.single("image"), async (req, res) => {
//   const { path: tempUpload, originalname } = req.file;

//   try {
//     await fs.rename(
//       tempUpload,
//       path.resolve(`./public/avatars/${originalname}`)
//     );
//   } catch (error) {
//     fs.unlink(tempUpload);
//   }
// });

// router.get("/avatars");

// ++++++++++++++++++++++++++++++++++++++++++++
