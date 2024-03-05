import {Layout, LegacyCard, Page, SkeletonBodyText, SkeletonDisplayText, Text, LegacyStack} from "@shopify/polaris";
import React from "react";

function SkeletonLayout(){
  return(
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <LegacyCard title="Todo List" sectioned>
            <SkeletonDisplayText size="small" maxWidth='190px' />
            <LegacyStack vertical>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
              <Text variant="bodyLg" as="div" alignment="justify">
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="medium" maxWidth='44px' />
              </Text>
            </LegacyStack>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <LegacyCard title="Add todo" sectioned>
            <SkeletonDisplayText size="medium" maxWidth='100%' />
            <SkeletonDisplayText size="medium" maxWidth='44px' />
          </LegacyCard>
          <LegacyCard title="Search todo" sectioned>
            <SkeletonDisplayText size="medium" maxWidth='100%' />
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default SkeletonLayout;