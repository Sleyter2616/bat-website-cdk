/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Blockquote(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="877px"
      height="282px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Blockquote")}
      {...rest}
    >
      <View
        width="877px"
        height="282px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "BG")}
      ></View>
      <View
        width="10px"
        height="162px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="21.28%"
        bottom="21.28%"
        left="6.04%"
        right="92.82%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,0,255,1)"
        {...getOverrideProps(overrides, "Question Highlight")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="36px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="719px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="67.73%"
        bottom="14.89%"
        left="9.69%"
        right="8.32%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ayrton Senna, 3-time Formula 1 Champion"
        {...getOverrideProps(overrides, "Speaker")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="900"
        color="rgba(255,255,255,1)"
        fontStyle="italic"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="740px"
        height="112px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="24.47%"
        bottom="35.82%"
        left="9.69%"
        right="5.93%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="“Racing, competing, is in my blood. It’s part of me, it’s part of my life; I’ve been doing it all my life. And it stands up before anything else.”"
        {...getOverrideProps(overrides, "Quote")}
      ></Text>
    </View>
  );
}
