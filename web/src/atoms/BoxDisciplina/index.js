import React from 'react';

import PropTypes from 'prop-types';

import {
  Wrapper,
  Container,
  Nome,
  CargaHoraria,
  IdDisciplina,
  PreReq,
} from './styles';

export default function BoxDisciplina({ disciplina, bg }) {
  return (
    <Wrapper>
      <Container type="button" style={{ background: bg }}>
        <Nome>{disciplina.nome}</Nome>
        <CargaHoraria>{disciplina.carga_horaria}</CargaHoraria>
        <IdDisciplina>{disciplina.codigo}</IdDisciplina>
        <PreReq>{disciplina.pre_requisito}</PreReq>
      </Container>
    </Wrapper>
  );
}

BoxDisciplina.propTypes = {
  disciplina: PropTypes.shape({
    codigo: PropTypes.string,
    nome: PropTypes.string.isRequired,
    carga_horaria: PropTypes.string.isRequired,
    pre_requisito: PropTypes.string.isRequired,
  }).isRequired,

  bg: PropTypes.string.isRequired,
};
