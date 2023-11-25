import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          はじまして！
          kogumaといいます！<br></br>
          WEBデザイナーとして勉強中です。
          看板デザインをIllustratoで制作したり、
          チラシからバナーを作成、WEBでFTPやWordPressから修正や追加をしていました。
          また動画制作のディレクターのようなこともしていました！</p>
          <p>WEBデザイナーとして働いている人と知り合い作品を見たことによってWEBのデザインやコードについて興味を持ち日々精進をしています！</p>
        </div>
        <div className="about-img">
          <Image src='/about.png' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;