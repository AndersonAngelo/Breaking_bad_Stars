import { useContext, useState } from 'react';
import Modal from 'react-modal'
import { SearchContext } from '../../contexts/Context'
import { CharacterStyle } from './style';
import CloseImg from '../../assets/close.svg'

type Character = {
  char_id: number;
  name: string;
  img: string;
  nickname: string;
  occupation: string;
  birthday: string;
  portrayed: string;
}

Modal.setAppElement('#root');

export function Character() {
  const { character } = useContext(SearchContext)

  const [openCharacterModal, setOpenCharacterModal] = useState(false)
  const [characterModal, setCharacterModal] = useState<Character>()

  function handleOpenCharacterModal(character: Character) {
    setCharacterModal(character)
    setOpenCharacterModal(true)
  }

  function handleCloseCharacterModal() {
    setOpenCharacterModal(false)
  }

  return (
    <>
      <CharacterStyle>
        {character?.map((character: Character) => (
          <div className='character' key={character.char_id}>
            <h2>{character.name}</h2>
            <img onClick={() => handleOpenCharacterModal(character)} src={character.img} alt={character.name} />
          </div>
        ))}
      </CharacterStyle>
      <Modal
        isOpen={openCharacterModal}
        onRequestClose={handleCloseCharacterModal}
        style={{
          overlay: {
            background: 'rgba(36, 36, 36, 0.45)',
          },
          content: {
            border: '1px solid #ccc',
            WebkitOverflowScrolling: 'touch',
            overflow: 'auto',
            borderRadius: '4px',
            padding: '20px',
          }
        }}

      >
        <div className='modal-container'>
          <button
            onClick={handleCloseCharacterModal}
            className="react-modal-close"
          >
            <img src={CloseImg} alt="Close Button" />
          </button>
          <span className='image-character'>
            <img src={characterModal?.img} alt="" />
          </span>
          <span className='description-container'>
            <h2>Nome:</h2>
            <p>{characterModal?.name}</p>
            <h2>Apelido:</h2>
            <p>{characterModal?.nickname}</p>
            <h2>Aniversário:</h2>
            <p>{characterModal?.birthday}</p>
            <h2>Ocupação:</h2>
            <p>{characterModal?.occupation.slice(0, 1)} <br /> {characterModal?.occupation.slice(1, 2)}</p>
            <h2>Ator(a):</h2>
            <p>{characterModal?.portrayed}</p>
          </span>
        </div>

      </Modal>
    </>
  )
}
