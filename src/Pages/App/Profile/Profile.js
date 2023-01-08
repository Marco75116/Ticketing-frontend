import React from "react";
import { Wrapper } from "./Profile.styled";
import ProfilePersonalCard from "./ProfilePersonalCard/ProfilePersonalCard";

const Profile = () => {
  return (
    <Wrapper>
      <ProfilePersonalCard />
    </Wrapper>
  );
};

export default Profile;
