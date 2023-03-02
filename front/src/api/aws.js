import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET,
  region: process.env.REACT_APP_REGION,
  signatureVersion: "v4",
});

export default async function postImages(file) {
  const s3 = new AWS.S3();
  const params = {
    Bucket: "grupo03dh/IMAGENES",
    Key: `${file.name}.${Date.now()}`,
    Body: file,
  };

  try {
    const response = await s3.upload(params).promise();
    const image = {
      key: response.Key,
      url: response.Location,
      nombre: file.name,
      descripcion: file.name,
    };
    return image;
  } catch (error) {
    console.log(error);
  }
}
