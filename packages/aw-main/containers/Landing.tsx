import React from 'react';

// import cls from 'classnames';
// import clsddp from 'classnames/dedupe';
import styles from './Landing.module.scss';
import {useAppLayout} from '@wfh/doc-ui-common/client/components/appLayout.state';
import {Button} from '@wfh/doc-ui-common/client/material/Button';
import {Dialog} from '@wfh/doc-ui-common/client/material/Dialog';
// import bannerBg from './demo-assets.jpg';

export type LandingProps = React.PropsWithChildren<{
  // Define your component properties
}>;

const Landing: React.FC<LandingProps> = function(props) {
  const layout = useAppLayout();
  React.useEffect(() => {
    if (layout) {
      layout.actionDispatcher.updateBarTitle('BROCCOLI & CO.');
      layout.actionDispatcher.updateFooter(<>
        <div className={styles.footerLine}>Made with ♥ in Melbourne.</div>
        <div className={styles.footerLine}>© 2021 Brocoli & Co. All rights reserved.</div>
      </>);
    }
  }, [layout]);
  return <div className={styles.scope}>
    <div className={styles.banner}>
      {/* <img src={bannerBg} alt='banner'/> */}
      <h1>A better way</h1>
      <h1>to enjoy every day.</h1>
      <div className={styles.subtitle}>Be the first to know when we launch.</div>
      <Button type='raised'>Request an invite</Button>
      <Dialog/>
    </div>
  </div>;
};


export {Landing as default};



