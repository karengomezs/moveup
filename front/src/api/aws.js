import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET,
  region: process.env.REACT_APP_REGION,
  signatureVersion: "v4",
});

export const uploadImage = async (file) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: "grupo03dh/IMAGENES",
    Key: `${Date.now()}.${file.name}`,
    Body: file,
  };
  try {
    const { Location } = await s3.upload(params).promise();
    return Location;
  } catch (error) {
    console.log({ error });
  }
};
