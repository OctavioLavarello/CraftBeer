import { Request, Response } from "express";
import { UserCompany, UserPerson, CodePassword } from "../../../db";

const putNewPassword = async (req: Request, res: Response) => {
  const { email, code, newPassword } = req.body;

  try {
    const findCodePassword = await CodePassword.findOne({
      where: { email: email, code: code },
    });

    if (!findCodePassword) {
      return res.status(401).send("Incorrect Code");
    } else if (findCodePassword.type === "person") {
      const updatedUser = await UserPerson.update(
        { password: newPassword },
        { where: { email: email } }
      );
      if (updatedUser[0] === 0)
        return res.status(500).send("error to update user");
      return res.status(200).send("Updated password");
    } else {
      const updatedCompany = await UserCompany.update(
        { password: newPassword },
        { where: { email: email } }
      );
      if (updatedCompany[0] === 0)
        return res.status(500).send("error to update user");
      return res.status(200).send("Updated password");
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default putNewPassword;
