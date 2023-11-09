import React from 'react'
import styles from '../../styles/NftCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const name = "Lizard";

const Card = (props: any) => {
  return (
    <div className={styles.itemHolder}>
      <Link href="opensea.com">
        <Image 
        alt=" " 
        src={props.def} 
        className={styles.itemImage} 
        width={175} 
        height={175}
        style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '1em'
          }}
        />
      </Link>
    </div>
  )
}

export default Card