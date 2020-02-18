// @ts-nocheck

import React from 'react'
import Header from '~/components/Header'
import { MoreHoriz } from '@material-ui/icons'

import { Container } from './styles'
import { useSelector } from 'react-redux'
import Table from '~/components/Table'
import SearchBar from '~/components/SearchBar'
import { ReactSVG } from 'react-svg'

type HomeProps = {

}

function Playlist (props: HomeProps) {
  const { headerFixed } = useSelector(({ app }) => app)

  return (
    <Container>
      <Header height={308}>
        <div className="head">
          <div className="cover">
            <ReactSVG />
          </div>
          <div className="info">
            <div className="label">Playlist</div>
            <h2 className="title">Dragonfucking</h2>
            <p className="text">
              Created by <a>rushy06</a> • 29 songs, 2hr 2 min
            </p>
            <div className="controls">
              <button className="play">
                <span>Play</span>
              </button>
              <button className="options">
                <MoreHoriz style={{ color: 'B3B3B3' }} />
              </button>
            </div>
          </div>
        </div>
        <div className="subhead">
          <div className="info">
            <div className="cover">
              <img />
            </div>
            <h2 className="title">Dragonfucking</h2>
          </div>
          <div className="controls">
            <button className="play">
              <span>Play</span>
            </button>
            <button className="options">
              <MoreHoriz style={{ color: 'B3B3B3' }} />
            </button>
          </div>
        </div>
      </Header>
      {headerFixed && <div className="extra-size" />}
      <SearchBar />
      <Table>
        hell
      </Table>
    </Container>
  )
}

export default Playlist