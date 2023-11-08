import styles from '../../styles/footer/footer.module.css';
import newWindow from '../../assets/images/icon-new-window.svg';
interface Props {
  url: string;
}
function Footer({ url }: Props) {
  return (
    <div>
      <div className={styles.footerWrapper}>
        <div className='horizontalDevider'></div>
        <div className={styles.sourceUrl}>
          <p>Source</p>
          <div className={styles.urlBox}>
            <a href={url} target='_blank'>
              {url} <img src={newWindow} alt='new window Icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
