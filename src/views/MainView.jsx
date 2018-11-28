import React from 'react'
import { Layout } from 'antd'

const {
  Footer,
  Sider,
  Header,
  Content,
} = Layout

const MainView = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      Something at the top
    </Header>
    <Content style={{ padding: '0 50px', marginTop: '64px' }}>
      <Layout style={{ padding: '24px 0', background: 'rgb(255, 255, 255)' }}>
        <Sider width={200} style={{ padding: '32px 24px', backgroundColor: 'rgb(255, 255, 255)' }}>
          Stuff doon the Sider
        </Sider>
        <Content style={{ padding: '32px' }}>
          Middle bit
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      2018 Jon Linnell, Loughborough University
    </Footer>
  </Layout>
)

export default MainView
