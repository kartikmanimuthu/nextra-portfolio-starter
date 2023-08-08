
export const personalization: { [key: string]: string } =
{
    profilePicPublicPath: "avatar/profile.png",
};


export const workExperience: ReadonlyArray<{ organization: string, role: string, duration: string }> = [
    {
        organization: "Acme",
        role: "Machine Learning Team Lead",
        duration: "02/2022 - Present",
    }
];

export const technicalSkills: ReadonlyArray<string> = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "SQL",
    "AWS"
];
