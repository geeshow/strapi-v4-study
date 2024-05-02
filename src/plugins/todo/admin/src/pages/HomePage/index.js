/*
 *
 * HomePage
 *
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {Layout, BaseHeaderLayout, ContentLayout}  from "@strapi/design-system/Layout"
import { EmptyStateLayout} from "@strapi/design-system/EmptyStateLayout";
import {Button} from "@strapi/design-system/Button"
import {Plus} from "@strapi/icons"
import { Illo } from "../../components/Illo";
import TodoModal from "../../components/TodoModel";
import { nanoid}  from "nanoid";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";
const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  async function addTodo(todo) {
    setTodoData([...todoData, {...todo, id: nanoid(), isDone: false}]);
  }

  async function toggleTodo(data) {
    alert(`Toggle todo with id`);
  }
  async function deleteTodo(id) {
    alert(`delete todo with id`);
  }
  async function editTodo(id, data) {
    alert(`eid todo with id`);
  }
  return (
    <Layout>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="Welcome to the Todo plugin"
        as="h2"
      />
      <ContentLayout>
        {
          todoData.length === 0 ? (
            <EmptyStateLayout
              icon={<Illo />}
              content="You don't have any todos yet"
              action={
                <Button
                  onClick={() => setShowModal(true)}
                  variant="secondary"
                  startIcon={<Plus />}
                >
                  Add your first todo
                </Button>
              }
            />
          ) : (
            <>
              <TodoCount count={todoData.length} />
              <TodoTable
                todoData={todoData}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                setShowModal={setShowModal}
              />
            </>
          )
        }
      </ContentLayout>
      { showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </Layout>
  );
};

export default HomePage;
